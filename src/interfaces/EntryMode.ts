export default interface EntryMode {
    name: string,
    label: string,
    toggleMode: (mode: string) => void
}