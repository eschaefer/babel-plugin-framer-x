module.exports = function({ types: t }) {
  return {
    visitor: {
      // Remove framer from "require" statements
      StringLiteral(path) {
        if (path.node.value === 'framer') {
          var requireStatement = path.findParent(
            el => el.node.type === 'VariableDeclaration'
          );
          if (requireStatement) requireStatement.remove();
        }
      },
      // Remove framer from import statements
      ImportDeclaration(path) {
        if (path.node.source.value === 'framer') {
          path.remove();
        }
      },
      // Remove propertyControls from statics
      ClassProperty(path) {
        if (path.node.key.name === 'propertyControls') {
          path.remove();
        }
      },
      // Maybe propertyControls was directly assigned
      Identifier(path) {
        if (path.node.name === 'propertyControls') {
          var assignmentEx = path.findParent(
            el => el.node.type === 'AssignmentExpression'
          );
          if (assignmentEx) assignmentEx.remove();
        }
      }
    }
  };
};
