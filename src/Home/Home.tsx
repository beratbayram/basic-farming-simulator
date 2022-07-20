import {useNavigate} from "react-router";

import './Home.scss'
import {useEffect, useState} from "react";
import Tomato from "../crops/Tomato";
import {toast} from "react-toastify";

import emptyField from "../assets/crops/empty_field.png"

const EMPTY_STATE = [
    [null, null, null, null, null,],
    [null, null, null, null, null,],
    [null, null, null, null, null,],
    [null, null, null, null, null,],
    [null, null, null, null, null,],
];

const growthDelay = 1000;

export default function Home() {
    const [farm, setFarm] = useState<(Tomato | null)[][]>(EMPTY_STATE);
    const [balance, setBalance] = useState(100);

    const navigate = useNavigate();

    function cropWorker() {
        for (let row = 0; row < farm.length; row++) {
            for (let field = 0; field < farm[row].length; field++) {
                farm[row][field]?.grow();
            }
        }
        setFarm([...farm]);
    }

    useEffect(() => {
        const intervalID = setInterval(cropWorker, growthDelay);

        return () => clearInterval(intervalID);
    }, [cropWorker]);


    function handleCropping(rowIndex: number, fieldIndex: number) {
        const field = farm[rowIndex][fieldIndex];
        if (field === null) {
            if(balance === 0){
                toast.error("No money available to buy seeds");
                return;
            }
            farm[rowIndex][fieldIndex] = new Tomato();
            setFarm([...farm]);
            setBalance(balance => balance - 5);
            return;
        }
        const income = field.harvest();
        farm[rowIndex][fieldIndex] = null;
        if (income === 0)
            toast.warn("No income received");
        else {
            toast.success(income + " earned");
            setBalance(balance => balance + income);
        }
        setFarm([...farm]);
    }

    return (
        <div className="Home">
            <div className="table-header">
                <h1>Farm ({balance}$)</h1>
                <button onClick={() => navigate("/")}>Logout</button>
            </div>
            <table>
                <tbody>
                {farm.map((row, rowIndex) =>
                    <tr key={"row" + rowIndex}>
                        {row.map((field, fieldIndex) =>
                            <td key={"field" + fieldIndex}
                                onClick={() => handleCropping(rowIndex, fieldIndex)}
                            >
                                {field?.getReactNode() ?? <img className="crop" src={emptyField} alt="Empty Field" />}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
