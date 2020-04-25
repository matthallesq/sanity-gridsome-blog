export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ea3877d1a021b39f80bad0a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-yzvs4v3w',
                  apiId: '082f9f0a-9010-40a5-902c-1d527d328dc3'
                },
                {
                  buildHookId: '5ea3877dd4cde237bc69ccbb',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7n55vvr7',
                  apiId: '626f543b-edbb-45eb-a4a6-04a8eb2a1302'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthallesq/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7n55vvr7.netlify.app', category: 'apps'}
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
