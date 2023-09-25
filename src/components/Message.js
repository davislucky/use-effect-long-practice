import { useState, useEffect } from "react";

function Message({ size, featherCount}) {
  const [customSize, setCustomSize] = useState('small');
  const [msg, setMsg] = useState('Oh my! Your bird is naked!');


  useEffect(() => {
    if (size === 's'){
      setCustomSize('small');
    } else if (size === 'm'){
      setCustomSize('medium');
    } else if (size === 'l'){
      setCustomSize('large');
    } else {
      setCustomSize('xlarge');
    } 
  }, [size]);

  useEffect(() => {
    if(featherCount > 0){
      setMsg(`I have ${featherCount} feathers`)
    }
  }, [featherCount])


  return (
    <div className={`message ${customSize}`}>
      {msg}
    </div>
  );
};

export default Message;