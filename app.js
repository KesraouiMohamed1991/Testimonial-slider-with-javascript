const link = document.querySelector('.btn');
let count = 1;
let index = document.querySelector('.index');
let title = document.querySelector('.title');
let h1 = document.querySelector('.h1');
let proff = document.querySelector('.proff');
let quote = document.querySelector('.quote');
let photoOne = document.querySelector('.one')
let photoTwo = document.querySelector('.two')
let photoThree = document.querySelector('.three')
let photoFour = document.querySelector('.four')
let photos = document.querySelectorAll('.photo')


const data = [
    {
        name: "James Smith",
        index: "01/4",
        testimonial: "I had a great experience working with this team. Their professionalism and expertise were evident throughout the entire process. They delivered high-quality solutions that exceeded my expectations. I highly recommend their services.",
        job: "Software Engineer",
        src: "https://images.unsplash.com/photo-1541519481457-763224276691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
        name: "Jane Doe",
        index: "02/4",
        testimonial: "I'm extremely impressed with the work done by this team. Their attention to detail and creative approach resulted in exceptional designs that perfectly represented my brand. They went above and beyond to ensure my satisfaction.",
        job: "Graphic Designer",
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
        name: "liza Johnson",
        index: "03/4",
        testimonial: "Working with this team was a fantastic experience. Their strategic marketing solutions helped drive significant growth for our business. They provided valuable insights and implemented effective campaigns that yielded impressive results.",
        job: "Marketing Manager",
        src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
        name: "Emily Davis",
        index: "04/4",
        testimonial: "I'm extremely grateful for the accounting services provided by this team. Their expertise and attention to detail have been invaluable. They helped optimize our financial processes and provided insightful advice that positively impacted our bottom line.",
        job: "Accountant",
        src: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
];


console.log(count);

const nextImage= function () {
    count++;

    if (count >= data.length) {
        count = 0; // Reset the count value to 0 when it reaches or exceeds the array length
    }

    console.log(data[count]);
    index.textContent = data[count].index;
    h1.textContent = data[count].name;
    proff.textContent = data[count].job;
    quote.textContent = data[count].testimonial;
    console.log(count);
    photoOne.src = data[count % data.length].src;
    photoTwo.src = data[(count + 1) % data.length].src;
    photoThree.src = data[(count + 2) % data.length].src;
    photoFour.src = data[(count + 3) % data.length].src;
}



link.addEventListener('click', nextImage);

