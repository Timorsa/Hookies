import useDidMount from './useDidMount';
import useDidUpdate from './useDidUpdate';
import useDidUnmount from './useDidUnmount';

const useLifeCycle = (onMount, onUnMount, onUpdate, onUpdateDependancyArray) => {
    const mount = useDidMount(onMount);
    const unmount = useDidUnmount(onUnMount);
    const updated = useDidUpdate(onUpdate, onUpdateDependancyArray);
    return [mount , unmount, updated];
}

export default useLifeCycle;