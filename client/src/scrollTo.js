import {contentBlockId} from './components/Content/Content';

export default function(offset) {
    const div = document.querySelector(`#${contentBlockId}`);
    div.scrollTo({top: offset - div.getBoundingClientRect().top, behavior: 'smooth', block: 'center'});
}