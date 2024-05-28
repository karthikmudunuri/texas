import { FC } from 'react';
import BlogCard from '../design/blogcard'; // Assuming you have a BlogCard component
import { TextGenerateEffecttt } from '../ui/text-generate-effect';

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  about: string;
}

const blogs: Blog[] = [
  { id: 1,
     title: "Canada's Esteemed Universities for MBA in Finance: A Detailed Insight", 
     image: '/images/b1.png',
     description: "When it comes to advancing your education with a master's degree, it's not just about gaining deeper knowledge but also about shaping your personality. For those considering studying abroad, the journey offers a treasure trove of exceptional experiences. However, for international students with an enthusiasm for delving into the intricate world of finance and business, Canada stands out as a remarkable study destination with a plethora of opportunities." , 
     about: "When it comes to advancing your education with a master's degree, it's not just about gaining deeper knowledge but also about shaping your personality. For those considering studying abroad, the journey offers a treasure trove of exceptional experiences. "
    },
    { id: 2,
        title: "Most Popular Accommodation Choices in the USA for International Students", 
        image: '/images/b2.png',
        description: "Starting an exciting journey of studying abroad in the US presents endless opportunities, but the high costs of accommodation pose a significant challenge for aspiring students. Despite the financial hurdles, hope emerges in the form of budget-friendly student apartments and other accommodations scattered across the country. Beyond university rankings and job prospects, finding affordable living space is crucial for international students. " , 
        about: "Starting an exciting journey of studying abroad in the US presents endless opportunities, but the high costs of accommodation pose a significant challenge for aspiring students."
       },
       { id: 3,
        title: "Study at Monash University: Recognized Globally for its Subject Rankings", 
        image: '/images/b3.png',
        description: "As the awareness among aspirants for quality education gains momentum, the attraction to study abroad continues to grow rapidly. Today, our exploration of the finest study destinations brings us to a country known for its world’s largest coral reef. By the hint, you may have guessed it now. Welcome to Australia! Did you know Australia is referred to as the ‘Land of Plenty’? Well, why not? Apart from plenty of natural resources and diverse landscapes, the country also hosts plenty of highly acclaimed global universities." , 
        about: "As the awareness among aspirants for quality education gains momentum, the attraction to study abroad continues to grow rapidly. Today, our exploration of the finest study destinations brings us to a country known for its world’s largest coral reef."
       },
       { id: 4,
        title: "A Closer Look at New Zealand’s Leading University: The University of Auckland", 
        image: '/images/b4.jpeg',
        description: "New Zealand, a beautiful island created 23 million years ago is not just popular for its surreal natural beauty, rich culture, friendly locals, excellent food, and wine but also for its world-class education. Notably, the country has been ranked as one of the most sought-after study destinations among international students. And what makes it special is its prestigious universities. Today we are going to talk about one such fantastic university, which is the University of Auckland. " , 
        about: "New Zealand, a beautiful island created 23 million years ago is not just popular for its surreal natural beauty, rich culture, friendly locals, excellent food, and wine "
       },
       { id: 5,
        title: "USA, UK, or Canada - Exploring Top Overseas Destinations for MBA", 
        image: '/images/b5.png',
        description: "What is one of the most popular courses to study overseas? Well, it’s the Master of Business Administration, known as MBA. Yearly, more and more students are considering an international MBA because of the promising career prospects it brings. With a world full of options, picking the right country for your MBA becomes crucial because each country carries its own unique perks and benefits. Let's explore the advantages of pursuing an MBA abroad." , 
        about: "What is one of the most popular courses to study overseas? Well, it’s the Master of Business Administration, known as MBA. "
       },

       { id: 6,
        title: "A Guide on TOEFL 2024: Your Gateway to Study Abroad", 
        image: '/images/b6.png',
        description: "As we step into the new year, the Test of English as a Foreign Language (TOEFL) continues to play a pivotal role in assessing language proficiency for students aiming to study in English-speaking countries. With a footprint spanning over 12,500 universities across 160 countries, TOEFL serves not merely as an evaluative measure but as a gateway to multifaceted opportunities. " , 
        about: "As we step into the new year, the Test of English as a Foreign Language (TOEFL) continues to play a pivotal role in assessing language proficiency for students aiming to study in English-speaking countries. "
       },
       { id: 7,
        title: "Comprehensive Insights into MS in the USA", 
        image: '/images/b7.jpeg',
        description: "The USA is unquestionably one of the most sought-after study destinations for international students. It is famous for numerous undergraduate and graduate courses. Among these, degrees and course options, Master of Science commonly known as MS is one of the most preferred course options that welcomes hundreds and thousands of international students every year. " , 
        about: "The USA is unquestionably one of the most sought-after study destinations for international students. It is famous for numerous undergraduate and graduate courses. "
       },
       { id: 8,
        title: "University Scholarships for International Students in Australia", 
        image: '/images/b8.png',
        description: "Australian universities recognize the incredible talents of international students on their campuses, and as a result, they offer a wide range of scholarships to acknowledge the best and the brightest from around the world. These university-specific scholarships are a boon for international students as there are many fully and partially funded scholarship options available. Thus, pursuing global academic excellence is now within reach of many. " , 
        about: "Australia has earned its reputation as a prime destination for international students seeking top-notch education in a culturally diverse environment. "
       },
       { id: 9,
        title: "Top Courses to Study in Canada: Universities, Fees & Scholarships", 
        image: '/images/b9.jpeg',
        description: "Studying the right course in Canada can elevate your career and ensure a great head start amongst your peers. Canada in the last few years has been highly in demand in the higher education circle as one of the most popular destinations. Multicultural environment, no language barrier, high standard of living, good quality educational institutes along with government welfare programmes for residents as well as citizens are some reasons international students want to pursue their education in Canada. " , 
        about: "Studying the right course in Canada can elevate your career and ensure a great head start amongst your peers. Canada in the last few years has been highly in demand in the higher education "
       },


  

  // Add more blog objects as needed
];

const words = `Blogs`
const BlogsPage: FC = () => {
  return (
    <div className='mt-12 bg-black'>
        <div className="mb-4 mt-16">
        <TextGenerateEffecttt words={words} />
            </div>
    <div className="grid grid-cols-3 gap-4  bg-black p-24">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    </div>
  );
};

export default BlogsPage;
