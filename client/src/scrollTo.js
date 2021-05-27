export default function(offset) {
    document.querySelector('#BlockWithScroll').scrollTo({top: offset - 100, behavior: 'smooth', block: 'center'});
}