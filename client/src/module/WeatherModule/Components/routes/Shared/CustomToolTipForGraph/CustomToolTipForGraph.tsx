import { services_numberInWeekToDayName } from "./services";

function CustomTooltip({ active, payload, label }: any): any {
    if (active && payload && payload.length) {
        return (
            <div
                style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", border: "1px solid black" }}
                className="custom-tooltip">
                <div >
                    <p className="label">{`${new Date(label).toLocaleDateString()}`}</p>
                    <p className="label">{`${services_numberInWeekToDayName(new Date(label).getDay())}`}</p>
                    <p className="label">{`${new Date(label).toLocaleTimeString()}`}</p>
                </div>
                <div style={{ backgroundColor: "var(--appThemeColor)", padding: "5px", borderRadius: "4px", color: "var(--defaultTextColor)" }}>
                    <p className="desc">{`${payload[0].value} meter/sec`}</p>
                    <p className="desc">{`${(payload[0].value * 3.6).toFixed(1)} km/h`}</p>
                </div>
            </div>
        );
    };
    return null;
};

export default CustomTooltip;