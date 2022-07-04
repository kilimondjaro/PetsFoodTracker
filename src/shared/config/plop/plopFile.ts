import type { NodePlopAPI } from 'plop';

module.exports = function (plop: NodePlopAPI) {
  plop.setHelper(
    'lowerFirstLetter',
    (txt: string) => txt[0].toLocaleLowerCase() + txt.substring(1)
  );
  plop.setHelper('literal', (txt: string) => txt);

  plop.setGenerator('UI component', {
    description: 'Reusable between screens ui component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Type component path',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Type component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}/ui.tsx',
        templateFile: 'templates/uiTemplate.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}/types.ts',
        templateFile: 'templates/typesTemplate.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}/index.ts',
        templateFile: 'templates/indexTemplate.hbs',
      },
    ],
  });
};
