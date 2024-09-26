module.exports = {
  name: 'Eva Favaro',
  title: 'Software Engineer',
  facts: {
    home: {
        icon: '<i class="fa fa-home fact-icon"></i>',
        name: 'Residence',
        value: 'Venice, Veneto, Italy'
    },
    email: {
        icon: '<i class="fa fa-envelope fact-icon"></i>',
        name: 'Email',
        value: '<a href="mailto:evafavaro@libero.it">evafavaro@libero.it</a>'
    },
    linkedin: {
        icon: '<i class="fa-brands fa-linkedin fact-icon"></i>',
        name: 'Linkedin',
        value: '<a href="https://www.linkedin.com/in/eva-favaro-09299832b/">Eva Favaro</a>'
    },
  },
  positions: [
  //   {
  //     title: 'Software Developer',
  //     company: 'Bizeta Retail Solutions srl | a Custom company / Custom S.p.A',
  //     location: 'Mestre and Mira, Italy',
  //     mode: 'Hybrid',  // or 'Remote', 'Hybrid'
  //     period: 'since October 2020',
  //     skills: ['.NET Core', 'AzureSQL', 'SQLServer', 'T-SQL', 'SQLite', 'Angular', 'AngularJS', 'ReactNative', 'Azure DevOps', 'CI/CD', 'Git', 'Expo'],
  //     contents: `
  // My first experience in Bizeta was working for the GShop Suite making small integrations and by creating 
  // an ETL connector (.NET Core) for GShop Suite and [IdStore](https://www.custom.biz/en_GB/product/software/id-store) 
  // to replace older handhandled Windows CE devices with newer Android ones (Xamarin Android).
  // Two years ago i was moved into the development team for [OneStore](https://www.custom.biz/en_GB/product/software/onestore), 
  // which is part of the Software Business Unit of Custom S.p.a. OneStore is a point of sale solution for the retail fashion and luxury sector.
  // The Backend is developed in its entirety with .NET and recently I started developing more and more on the frontend side in ReactNative and bundled with [Expo](https://expo.dev).

  // Other technologies used: SQL Server, Azure SQL Server, SQLite, Azure Dev
  // For version control and branch workflow: Git with Azure DevOps, GitKraken (Git GUI), using release branch workflow with pull request policies`
  // }
  ],
  educations: [
    {
      title: 'Bachelor Degree in Mathematics',
      institution: 'Università degli Studi di Padova',
      location: 'Padua, Italy',
      mode: 'In-person',  // or 'Remote', 'Hybrid'
      period: 'october 2020 - september 2024 · 4 years',
      skills: ['mathematics'],
      contents: ``
    },
    {
      title: 'High School Diploma in Electronics',
      institution: 'ITIS C. Zuccante',
      location: 'Mestre (Venice), Italy',
      mode: 'In-person',  // or 'Remote', 'Hybrid'
      period: 'september 2015 - july 2020 · 5 years',
      skills: ['computer sciences', 'mathematics', 'electronics'],
      contents: `Specialized subjects studied: mathematics, computer science, statistics, electronics.`
    }
  ],
  languages: [
    {
      title: 'Italian',
      levels: ['Mother Tongue']
    },
    {
      title: 'English',
      isSecondLanguage: true,
      levels:['Listening: B2', 'Reading: B2', 'Writing: B2', 'Speaking: B2']
    }
  ]
};