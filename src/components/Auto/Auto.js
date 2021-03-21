import './Auto.scss';

function Auto(props) {
	let {auto} = props;
  return (
    <div className="Auto">
			<div className="Auto__img">
				<img src={auto.img} alt=""/>
			</div>
      <div className="Auto__title">{auto.title}</div>
      <div className="Auto__description">{auto.description}</div>
			<div className="Auto__price">{auto.price}</div>
			<div className="Auto__button">Детальніше</div>
    </div>
  );
}

export default Auto;