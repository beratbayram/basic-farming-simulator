import {useNavigate} from "react-router";
import useForceUpdate from "../utils/useForceUpdate";

import './Home.scss'
import {useState} from "react";

const CROP_STATE = [
    " X ",
    "...",
    "___",
    "===",
    "|||",
]

const EMPTY_STATE = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

export default function Home() {
    const navigate = useNavigate();
    const forceUpdate = useForceUpdate();

    const [farm, setFarm] = useState(EMPTY_STATE);

    function handleCropping(rowIndex: number, fieldIndex: number) {
        const _farm = [...farm];
        _farm[rowIndex][fieldIndex] = (_farm[rowIndex][fieldIndex] + 1) % 5;
        setFarm(_farm);
    }

    return (
        <div className="Home">
            <div className="table-header">
                <h1>Farm</h1>
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
                                {CROP_STATE[field]}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
