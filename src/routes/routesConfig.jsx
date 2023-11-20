const routesConfig = {
  user: [
    {
      path: 'project',
      children: [
        { path: 'add', component: 'AddProject' },
        { path: 'all', component: 'AllProject' },
      ],
    },
    {
      path: 'profile',
      children: [
        { path: ':profile', component: 'ProfileShow' },
        { path: 'update', component: 'EditUserProfile' },
        { path: 'change-password', component: 'PasswordChange' },
      ]
    },
  ],
  contributor: [
    {
      path: 'project',
      children: [
        { path: 'add', component: 'AddProject' },
        { path: 'all', component: 'AllProject' },
      ],
    },
    {
      path: 'profile',
      children: [
        { path: ':profile', component: 'ProfileShow' },
        { path: 'update', component: 'EditUserProfile' },
        { path: 'change-password', component: 'PasswordChange' },
      ]
    },
  ],
  researcher: [
    {
      path: 'project',
      children: [
        { path: 'add', component: 'AddProject' },
        { path: 'all', component: 'AllProject' },
      ],
    },
    {
      path: 'profile',
      children: [
        { path: ':profile', component: 'ProfileShow' },
        { path: 'update', component: 'EditUserProfile' },
        { path: 'change-password', component: 'PasswordChange' },
      ]
    },
  ],
};

export default routesConfig;
