module.exports = function({ types: t }) {
	return {
		visitor: {
			// Remove framer from "require" statements
			StringLiteral(path) {
				if (path.node.value === 'framer') {
					var thing = path.findParent(
						el => el.node.type === 'VariableDeclaration'
					);
					if (thing) thing.remove();
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
			}
		}
	};
};