export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d98afd553170ea7d6eb843c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ri2jucgv',
                  apiId: '929dc677-f538-4fe5-9a5d-2f648bb4503e'
                },
                {
                  buildHookId: '5d98afd607fdee6f7b2f0a68',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dcww4eka',
                  apiId: 'ef81f218-b2ae-43de-9b96-200031c4f76f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephenajulu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dcww4eka.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
