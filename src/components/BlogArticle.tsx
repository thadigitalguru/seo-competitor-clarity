
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export const BlogArticle = () => {
  // Sample data for charts
  const competitorRankingData = [
    { name: "Your Site", rank: 4, fill: "#8B5CF6" },
    { name: "Competitor A", rank: 1, fill: "#D946EF" },
    { name: "Competitor B", rank: 2, fill: "#F97316" },
    { name: "Competitor C", rank: 3, fill: "#0EA5E9" },
  ];
  
  const wordCountData = [
    { name: "Your Site", wordCount: 1200, fill: "#8B5CF6" },
    { name: "Competitor A", wordCount: 2450, fill: "#D946EF" },
    { name: "Competitor B", wordCount: 1890, fill: "#F97316" },
    { name: "Competitor C", wordCount: 2150, fill: "#0EA5E9" },
  ];
  
  const pieData = [
    { name: "Keyword Gap", value: 35, fill: "#8B5CF6" },
    { name: "Shared Keywords", value: 65, fill: "#E5DEFF" }
  ];
  
  const COLORS = ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9"];
  
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">How to Outrank Your Competitors: A Data-Driven Approach</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>By Sarah Johnson</span>
          <span>•</span>
          <span>June 15, 2024</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80" 
          alt="SEO Dashboard on Computer Screen" 
          className="w-full h-auto rounded-lg mb-8"
        />
      </div>
      
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          In today's hyper-competitive digital landscape, understanding how you stack up against your competitors 
          is no longer optional—it's essential for survival and growth. Yet many website owners struggle with 
          the same fundamental questions about their SEO performance.
        </p>
        
        <h2>The Questions Every Website Owner Asks</h2>
        
        <p>
          If you manage a website, chances are you've asked yourself these questions:
        </p>
        
        <ul>
          <li><strong>Where do I rank compared to my competitors?</strong></li>
          <li><strong>Why are my competitors outranking me for important keywords?</strong></li>
          <li><strong>How does my content compare to theirs in terms of length and depth?</strong></li>
          <li><strong>What keywords are they targeting that I'm missing?</strong></li>
          <li><strong>How can I improve my overall SEO performance?</strong></li>
        </ul>
        
        <p>
          SEO Competitor Clarity was built specifically to answer these questions with data-driven insights.
          Let's look at how our tool provides clear answers to each of these critical questions.
        </p>
        
        <h2>Question 1: Where Do I Rank Compared to My Competitors?</h2>
        
        <p>
          Understanding your position in search engine results pages (SERPs) relative to your competitors 
          is the first step in developing an effective SEO strategy.
        </p>
        
        <Card className="my-8 p-6">
          <h3 className="text-xl font-semibold mb-4">SERP Position Analysis</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={competitorRankingData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis reversed label={{ value: 'SERP Position', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="rank">
                  {competitorRankingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Key Takeaway:</strong> SEO Competitor Clarity shows your exact SERP position 
            alongside your top competitors, giving you a clear picture of where you stand in the rankings.
          </p>
        </Card>
        
        <h2>Question 2: How Does My Content Compare to My Competitors?</h2>
        
        <p>
          Content length isn't everything, but it's often a significant factor in ranking. Comparing your content 
          length to competitors gives you insights into potential content gaps.
        </p>
        
        <Card className="my-8 p-6">
          <h3 className="text-xl font-semibold mb-4">Content Length Comparison</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={wordCountData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Word Count', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="wordCount">
                  {wordCountData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Key Takeaway:</strong> Visual comparison of content length helps identify if your content 
            needs expansion to match or exceed competitor depth.
          </p>
        </Card>
        
        <h2>Question 3: What Keywords Are My Competitors Targeting That I'm Missing?</h2>
        
        <p>
          Keyword gaps represent valuable opportunities for your content strategy. Identifying terms your 
          competitors rank for—but you don't—can reveal untapped potential.
        </p>
        
        <Card className="my-8 p-6">
          <h3 className="text-xl font-semibold mb-4">Keyword Gap Analysis</h3>
          <div className="h-72 flex items-center justify-center">
            <div className="w-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Top Missed Keywords:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  "seo competitor analysis" (Pos. 3)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  "keyword tracking tool" (Pos. 5)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  "how to beat competitors seo" (Pos. 2)
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Key Takeaway:</strong> SEO Competitor Clarity identifies specific keywords your 
            competitors rank for that you're missing, along with their position and search volume.
          </p>
        </Card>
        
        <h2>Putting It All Together: Your Action Plan</h2>
        
        <p>
          With SEO Competitor Clarity, you don't just get data—you get actionable insights that 
          translate directly into an effective SEO strategy:
        </p>
        
        <ol>
          <li>
            <strong>Identify your ranking position</strong> relative to competitors for key terms
          </li>
          <li>
            <strong>Analyze content length differences</strong> and expand thin content where needed
          </li>
          <li>
            <strong>Discover keyword opportunities</strong> your competitors are capitalizing on
          </li>
          <li>
            <strong>Track performance changes over time</strong> as you implement improvements
          </li>
          <li>
            <strong>Receive customized recommendations</strong> based on your specific competitive landscape
          </li>
        </ol>
        
        <h2>Conclusion: Data-Driven SEO Success</h2>
        
        <p>
          The questions that keep website owners up at night don't have to remain unanswered. 
          With the right tools and insights, you can develop a clear understanding of your competitive 
          landscape and create a strategy that drives measurable improvements in your search rankings.
        </p>
        
        <p>
          SEO Competitor Clarity transforms complex competitive data into simple, actionable insights 
          that answer your most pressing SEO questions and help you outrank your competition.
        </p>
        
        <div className="my-8 flex justify-center">
          <Button size="lg" className="rounded-full">
            Try SEO Competitor Clarity Today
          </Button>
        </div>
      </div>
    </article>
  );
};
