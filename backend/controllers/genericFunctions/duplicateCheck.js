const duplicateCheck = async (Model, id, details) => {
    try {
        const m = await Model.find(details);
        return m && id !== m._id;
    } catch (error) {
        throw new Error(`Error during duplicate check: ${error.message}`);
    }
}
export default duplicateCheck;