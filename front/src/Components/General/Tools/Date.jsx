export default function Date(props) {
    return(
        props.split('-').reverse().join('/')  // the component reverse the element around the '-' that are in the database and change them in '/'
    )
}