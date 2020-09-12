function structureUserInfo(name) {
	let infoOblect = {};
	
	return function obj(role) {

		infoOblect.role = role;
		infoOblect.name = name;

		return infoOblect;
	}
}

