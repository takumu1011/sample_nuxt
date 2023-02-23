export function useCounter(initialValue: number) {
    const count = ref(initialValue);
    const increment = () => (count.value = count.value + 1);
    const decrement = () => (count.value = count.value - 1);
    return {
        count,
        increment,
        decrement
    }
}