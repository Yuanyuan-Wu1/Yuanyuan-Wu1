import { Button, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  // 获取当前年月，考虑时区
  const getCalendlyDate = () => {
    // 使用 PST/PDT 时区
    const date = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const pstDate = new Date(date);
    const year = pstDate.getFullYear();
    const month = (pstDate.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  };

  // 生成 Calendly URL
  const calendlyUrl = `https://calendly.com/yuanyuanwu2024/30min?month=${getCalendlyDate()}`;

  const contactInfo = {
    email: 'yuanyuanwu2024@gmail.com',
    linkedin: {
      url: 'https://www.linkedin.com/in/yuanyuan-yoyo-wu/',
      display: 'linkedin.com/in/yuanyuan-yoyo-wu'
    },
    github: {
      url: 'https://github.com/Yuanyuan-Wu1',
      display: 'github.com/Yuanyuan-Wu1'
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        
        {/* Calendly 集成 - 使用动态URL和时区 */}
        <div className="mb-8">
          <h3 className="text-xl mb-4">Schedule a Meeting</h3>
          <p className="text-sm text-gray-600 mb-2">
            Available: 8:00 AM - 6:00 PM (Pacific Time)
          </p>
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Book a 30-minute call
          </a>
        </div>

        {/* 其他联系方式 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Yuanyuan Wu"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="yuanyuanwu2024@gmail.com"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write your message here... 
                  - What would you like to discuss?
                  - Any specific questions?
                  - Project collaboration ideas?"
                  className="w-full p-2 border rounded"
                  rows={4}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-accent text-white px-6 py-2 rounded hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Other Ways to Connect</h3>
            <div className="space-y-2">
              <p>Email: yuanyuanwu2024@gmail.com</p>
              <p>LinkedIn: https://www.linkedin.com/in/yuanyuan-yoyo-wu/</p>
              <p>GitHub: https://github.com/Yuanyuan-Wu1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
