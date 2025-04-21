"use client";
import { Button } from "../../../components/ui/Button";
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-muted-foreground text-lg">
          This page is for introductory purposes. Here you can find my social links and personal portfolio.
        </p>
      </div>

      {/* About */}
      <div className="text-center text-muted-foreground space-y-2">
        <p>
          {` I'm Zurab Dalakishvili — a full-stack developer passionate about building modern web applications, APIs, and commercial platforms.`}
        </p>
        <p>
          This portfolio project is designed as a commercial-style simulation to present a real-world product experience.
        </p>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="https://github.com/zudskyy" target="_blank">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/zurab-dalakishvili-a7b996220/" target="_blank">
          <Button variant="outline" size="lg">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </Link>

        <Link href="mailto:zudskyy@gmail.com">
          <Button variant="outline" size="lg">
            <Mail className="w-5 h-5 mr-2" />
            Email
          </Button>
        </Link>

        <Link href="https://yourportfolio.com" target="_blank">
          <Button variant="outline" size="lg">
            <Globe className="w-5 h-5 mr-2" />
            Portfolio
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ContactPage
