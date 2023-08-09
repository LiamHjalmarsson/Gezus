import style from "./ChartBar.module.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue ) * 100) + "%";
    }

    return (
        <>
            <div className={style.chartBar}>
                <div className={style.inner}>
                    <div className={style.fill} style={{ height: barFillHeight }}>
                    </div>
                </div>
                <div className={style.label}>
                    {props.label}
                </div>
            </div>
        </>
    );
}

export default ChartBar;