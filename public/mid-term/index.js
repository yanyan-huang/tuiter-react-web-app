const Question = () => {
    let A = {
        C: 'F',
        D: 'G' }
    let B = {
        D: 'H',
        E: 'I',
        ...A, }
    A= { ...B,
        D: 'J',
        E: 'K' }
    return(
        <>
            <h1>{A.C}</h1>
            <h2>{B.D}</h2>
            <h3>{A.E}</h3>
        </> )
}
// console.log(Question);
export default Question;

