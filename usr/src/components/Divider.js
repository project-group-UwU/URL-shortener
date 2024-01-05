import '../styles/Divider.css';

function Divider(props) {
	return (
		<div className={`divider${props.lineNum}`} />
	)
}

export default function Dividers() {
    return (
		<div className='dividers'>
			<Divider lineNum={0}/>
			<Divider lineNum={1}/>
			<Divider lineNum={2}/>
			<Divider lineNum={3}/>
			<Divider lineNum={4}/>
		</div>
    )
};