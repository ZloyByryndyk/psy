export default {
    firstObj: {
        modalContentText: 
            `Точность результатов зависит от честности ваших ответов.
    Результаты не являются диагнозом. 
    Диагноз должен ставить специалист.
    Тесты можно проходить неограниченное количество раз.`
    },
    //первый параметр отвечает за номер страницы в приложении
    Interpretation: {
        convex: 
            `Выпуклый тип: темп нарастает до максимального в первые 10-15 секунд работы;
в последующем, к 25-30 сек, он может снизиться ниже исходного уровня (т.е. наблюдавшегося в первые 5 секунд работы).
Этот тип кривой свидетельствует о наличии у испытуемого сильной нервной системы;`,
        smooth: 
`Ровный тип: максимальный темп удерживается примерно на одном уровне в течение всего времени работы.
Этот тип кривой характеризует нервную систему испытуемого как нервную систему средней силы;`,
        down:
`Нисходящий тип: максимальный темп снижается уже со второго 5-секундного отрезка и остается на сниженном уровне в течение всей работы.
Этот тип кривой свидетельствует о слабости нервной системы испытуемого;`,
        concave:
`Промежуточный тип: темп работы снижается после первых 10-15 секунд.
Этот тип расценивается как промежуточный между средней и слабой силой нервной системы — средне-слабая нервная система;`,
  }
}