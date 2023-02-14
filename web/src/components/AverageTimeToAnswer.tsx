export function AverageTimeToAnswer() {
    console.log('hours in last 7 days is working')

    return (
        <div className="bg-white rounded-lg w-[20%] flex flex-col justify-between">
            <p className="mx-auto"> Tempo Médio</p>
            <div className="bg-LightBlue-400 rounded-[50%] text-white my-14 mx-4 flex justify-center">
                <select name="AverageTime" id="AverageTime"
                 className={`bg-transparent py-4 px-1`}
                >
                    <option value="">Tempo Médio</option>
                    <option value="today">Hoje</option>
                    <option value="thisWeek">Nesta Semana</option>
                    <option value="thisMonth">Neste Mês</option>
                    <option value="thisYear">Neste Ano</option>
                    <option value="thisTwoMonths">Neste Bimestre</option>
                    <option value="thisThreeMonths">Neste Trimestre</option>
                    <option value="thisSixMonths">Neste Semestre</option>
                    <option value="lastThree">Últimos 3 dias </option>
                    <option value="lastSeven">Últimos 7 dias</option>
                    <option value="lastThirty">Últimos 30 dias</option>
                    <option value="lastSixty">Últimos 60 dias</option>
                    <option value="lastNinety">Últimos 90 dias</option>
                    <option value="lastOneHundredEightyTwo">Últimos 182 dias</option>
                    <option value="lastThreeHundredSixtyFive">Últimos 365 dias</option>
                </select>
            </div>
        </div>
    )
};