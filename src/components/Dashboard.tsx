import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Upload, 
  BarChart3, 
  Brain, 
  FileText, 
  TrendingUp,
  Award,
  Clock
} from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">StudyFlow</h1>
                <p className="text-sm text-muted-foreground">Personalized Learning Platform</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload Documents
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-study-progress/10 to-study-progress/5 border-study-progress/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Streak</p>
                <p className="text-3xl font-bold text-study-progress">7 days</p>
              </div>
              <Award className="w-8 h-8 text-study-progress" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-study-assessment/10 to-study-assessment/5 border-study-assessment/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Documents</p>
                <p className="text-3xl font-bold text-study-assessment">24</p>
              </div>
              <FileText className="w-8 h-8 text-study-assessment" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-study-analytics/10 to-study-analytics/5 border-study-analytics/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                <p className="text-3xl font-bold text-study-analytics">87%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-study-analytics" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-study-documents/10 to-study-documents/5 border-study-documents/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Time</p>
                <p className="text-3xl font-bold text-study-documents">2.5h</p>
              </div>
              <Clock className="w-8 h-8 text-study-documents" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Progress */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Current Progress
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Machine Learning Fundamentals</span>
                    <span className="text-muted-foreground">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Data Structures & Algorithms</span>
                    <span className="text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Statistics for Data Science</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Document Processing */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-primary" />
                Document Processing
              </h2>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Drop your study materials here</p>
                <p className="text-muted-foreground mb-4">
                  Upload PDFs, Word docs, or text files to generate personalized assessments
                </p>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Choose Files
                </Button>
              </div>
            </Card>

            {/* Recent Assessments */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Recent Assessments
              </h2>
              <div className="space-y-3">
                {[
                  { title: "Neural Networks Quiz", score: 92, date: "2 hours ago" },
                  { title: "Linear Algebra Test", score: 85, date: "1 day ago" },
                  { title: "Python Fundamentals", score: 78, date: "3 days ago" }
                ].map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">{assessment.title}</p>
                      <p className="text-sm text-muted-foreground">{assessment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{assessment.score}%</p>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-accent" />
                AI Recommendations
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-sm mb-2">Focus Area</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your recent performance, consider reviewing gradient descent concepts.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Start Review
                  </Button>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20">
                  <h3 className="font-semibold text-sm mb-2">Study Schedule</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    You're ahead of schedule! Perfect time to tackle advanced topics.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Advanced
                  </Button>
                </div>
              </div>
            </Card>

            {/* Study Analytics */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-study-analytics" />
                Study Analytics
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly Goal</span>
                    <span className="text-muted-foreground">18/20h</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium text-sm mb-3">Performance Trends</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Accuracy</span>
                      <span className="text-success">↗ +5%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Speed</span>
                      <span className="text-success">↗ +12%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Retention</span>
                      <span className="text-warning">→ Stable</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Generate Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Review Notes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};