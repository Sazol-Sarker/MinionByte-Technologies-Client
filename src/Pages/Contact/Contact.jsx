import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className='flex flex-col items-center m-4'>
            <title>MinionByte Tech | Contact Page</title>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam quae quaerat reiciendis illo distinctio laudantium aliquam reprehenderit, modi veritatis culpa, perspiciatis pariatur? Temporibus quibusdam omnis minus corporis dolorum ipsam sequi quidem rerum iste, placeat sed cumque eligendi et praesentium! Asperiores minima dolore aliquid corporis nisi similique obcaecati magnam animi.</p>
            <h2>Contact Us</h2>
            <ContactForm></ContactForm>
            <button>Contact Us</button>
        </div>
    );
};

export default Contact;