import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c4266ad6-68f9-4bde-9d12-135f322cdca3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Envie-nos uma mensagem <img src={msg_icon} alt="" /></h3>
                <p>
                    Sinta-se à vontade para entrar em contato conosco pelo formulário de contato ou encontre nossas
                    informações de contato abaixo. Seu feedback, perguntas e sugestões são importantes para nós,
                    pois nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.
                </p>

                <ul>
                    <li><img src={mail_icon} alt="" />ingryddasilva7@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+55 11 94967-6202</li>
                    <li><img src={location_icon} alt="" />Av. Paulista, 01 - São Paulo, SP</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Seu nome</label>
                    <input type="text" name='name' placeholder='Digite seu nome' required/>
                    
                    <label>Telefone</label>
                    <input type="text" name='phone' placeholder='Digite seu telefone' required/>
                
                    <label>Deixe sua mensagem aqui</label>
                    <textarea type="text" name='message' placeholder='Digite sua mensagem' required/>

                    <button type='submit' className='btn dark-btn'>Enviar <img src={white_arrow} alt="" /></button>
                    
                    <span>{result}</span>
               </form>
            </div>
        </div>
    )
}

export default Contact
