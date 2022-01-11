import PropTypes from 'prop-types';



// FC
const PrimeraApp = ({saludo, subtitulo}) => {

    // const saludo = {
    //     nombre: 'Enilio',
    //     edad: 28
    // };

    // console.log(props)

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

export default PrimeraApp