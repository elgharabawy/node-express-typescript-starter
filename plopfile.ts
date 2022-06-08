const generator = (plop) => {
  plop.setGenerator('resource', {
    description: 'API Resource',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your resource name? (Hint: use lowercase and spaces if needed. Example: restaurant, menu item, ... etc)'
    }],
    actions: [
      {
        type: 'add',
        path: './types/{{dashCase name}}.d.ts',
        templateFile: './plop-templates/type.plop'
      },
      {
        type: 'add',
        path: './src/routers/{{dashCase name}}.router.ts',
        templateFile: './plop-templates/router.plop'
      },
      {
        type: 'add',
        path: './src/services/{{dashCase name}}.service.ts',
        templateFile: './plop-templates/service.plop'
      },
      {
        type: 'add',
        path: './src/controllers/{{dashCase name}}.controller.ts',
        templateFile: './plop-templates/controller.plop'
      }
    ]
  })
}

export { generator as default }