export default {
  common: {
    actions: 'Действия',
    addNew: 'Добавить еще',
    themes: {
      standard: 'Стандартная',
      mint: 'Мята',
      malibu: 'Малибу'
    }
  },
  dashboard: {
    settings: {
      head: 'Настройки',
      language: 'Язык',
      theme: 'Тема',
      darkmode: 'Тёмный'
    },
  },
  resources: {
    children: {
      name: "Ребёнок |||| Дети",
      filters: {
        ageBetween: "Возраст"
      }
    },
    customers: {
      name: "Клиент |||| Клиенты",
      fields: {
        lastName: 'Фамилия',
        firstName: 'Имя',
        patronymic: 'Отчество',
      },
      forms: {
        show: {
          summaryTab: 'Общая информация',
          contactsTab: 'Контакты',
          childrenTab: 'Дети',
          dealsTab: 'Сделки',
        }
      }
    }
  }
};
