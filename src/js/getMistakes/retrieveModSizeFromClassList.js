
export default function(str, i, orderPath) {
    return orderPath[i].classList.split(' ').
              filter( item => item.match(str) )[0].
              split('_').pop();
}