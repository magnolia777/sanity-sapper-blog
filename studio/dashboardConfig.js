export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ed4f0e1987c7ab17735686a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-so8eu15j',
                  apiId: '4c2419d1-e870-4a75-a2d5-58993f44f74a'
                },
                {
                  buildHookId: '5ed4f0e18db2b8ee63dbdd51',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-khdgepvj',
                  apiId: 'e9cc5e55-871a-40d6-bc09-64faf704f73c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnolia777/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-khdgepvj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
