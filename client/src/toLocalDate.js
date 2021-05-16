const toLocalDate = (t) => {
    const date = new Date(t);
    const dateWithOffset = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toString();
    const temp = dateWithOffset.split(' ');
    return `${temp[2]} ${temp[1]}, ${temp[3]}`;
};

export default toLocalDate;