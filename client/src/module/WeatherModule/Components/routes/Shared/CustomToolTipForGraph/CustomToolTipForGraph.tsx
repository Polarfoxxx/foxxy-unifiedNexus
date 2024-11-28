import React from "react";
import { Type_forCustomTooltip } from "./services";

function CustomTooltip({
    active,
    payload,
    label,
    units,
    recalculate,
    secUnits,
    secRecalculate
}: Type_forCustomTooltip): JSX.Element | null {

    const [date, day, time] = React.useMemo(() => {
        if (label) {
            return label.split(" ");
        } else return ["", "", ""]
    }, [label]);

    if (active && payload && payload.length) {
        return (
            <div
                style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", border: "1px solid black" }}
                className="custom-tooltip">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "5px" }} >
                        <div>
                            <p
                                style={{ fontWeight: "bold" }}
                                className="label">
                                {date}
                            </p>
                        </div>
                        <div>
                            <p
                                style={{ fontWeight: "bold" }}
                                className="label">
                                {day}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p
                            style={{ fontSize: "13px" }}
                            className="label">
                            {time}
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: "var(--appThemeColor)", padding: "5px", borderRadius: "4px", color: "var(--defaultTextColor)" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <p
                                style={{ fontWeight: "bold" }}
                                className="desc">
                                {payload[0].value}
                            </p>
                        </div>
                        <div>
                            <p style={{ fontSize: "12px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}>
                                {units}
                            </p>
                        </div>
                    </div>
                    <div>
                        {
                            secUnits && secRecalculate
                             &&
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <p
                                        className="desc"
                                        style={{ fontWeight: "bold" }}>
                                        {(payload[0].value * secRecalculate).toFixed(1)}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "12px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}>
                                        {secUnits}
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default CustomTooltip;