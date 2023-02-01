import Content from '../components/Content/Content';
import ContentTwo from '../components/ContentTwo/ContentTwo';
import Header from './../components/header/Header'
import Contacts from './Contacts';
import Projects from './Projects';
import Store from './Store';

const Home = () => {
    return (
		<>
			<Header 
			title="Hi, my name is " 
			name="Temirlan"
			subtitle="a frontend developer"
			text="with passion for learning and creating."
			button="Download"/>
			
			<ContentTwo
			title="First"
			body="I have a personal website that serves as an online portfolio. It showcases my skills and achievements, and it helps me connect with potential employers and clients. I created this website to promote my brand and to have a central location where people can learn more about me and my work."
			titleTwo="Second"
			bodyTwo="I have a blog where I write about topics that interest me, including technology, entrepreneurship, and personal development. This website provides me with a creative outlet to share my thoughts and ideas with others. It also allows me to connect with like-minded individuals and build a community around my interests."
			/>

			<ContentTwo
			title="Lastly"
			body="I have an e-commerce website where I sell products related to my hobbies. This website has allowed me to turn my passions into a business and to reach a wider audience. It has also taught me valuable skills in online marketing, website design, and customer service."
			titleTwo="In conclusion"
			bodyTwo="my websites have been a source of personal and professional growth. They have allowed me to connect with new people, share my ideas, and build my brand. I look forward to continuing to develop and grow these websites in the future."
			/>

			<Content 
					title="Web sites In today's digital age," 
					subtitle=" having a website is essential for personal and business purposes. A website is a platform that allows individuals andorganizations to present themselves and their services to the world. "
					text=" I have several websites that serve different purposes and I would like to share my experiences with them."
					button="More"/>
			
			<Projects/>
			<Store/>
			<Contacts/>
		</>
	);
}

export default Home;