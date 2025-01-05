const source = [
    {
        'name': <p>Отчёт&nbsp; об&nbsp; обследовании</p>,
        'description' : 'Включает в себя полную развёрнутую информацию о проведённых работах. В процессе анализа оценивается:',
        'parts' : [
            'соответствие конструкции и параметров сооружения проекту или нормативным документам, если проект отсутствует',
            'соответствие оборудования сооружения нормативным документам',
            'физический износ сооружения',
            'ведение эксплуатационной документации',
            'выполнение контрольных операций',
            'наличие системы мониторинга на сооружении'
        ]
    },
    {
        'name': <p>Паспорт&nbsp; ГТС</p>,
        'description' : 'Включает в себя подробное описание конструкции, оборудования, а также системы мониторинга сооружения:',
        'parts' : [
            'акт освидетельствования',
            'свидетельство о годности сооружения к эксплуатации',
            'извещение об изменении режима эксплуатации и необходимости проведения ремонтных работ',
            'заключение о техническом состоянии',
            '*разрабатывается по форме ГОСТ Р 54523-2011 или ГОСТ Р 55561-2013. Также приводится информация о расчётном судне и допустимых нагрузках.'
        ],
    },
    {
        'name': <p>Протокол&nbsp; идентификации</p>,
        'description' : 'Протокол идентификации устанавливает соответствие объекта наименованию и декларируемым показателям:',
        'parts' : [
            'описание сооружения его класс, год постройки, проектант и генподрядчик',
            'результаты обследования',
            'степень соответствия результатов проекту или паспорту ГТС',
        ]
    }
]
export default source;
