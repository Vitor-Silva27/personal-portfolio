interface IProject {
  name: string;
  image: string;
  roles: string[];
  description: string[];
  techs: string[];
  liveLink?: string;
  githubLink?: string;
  backward?: boolean;
  color: string;
  reason?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}
