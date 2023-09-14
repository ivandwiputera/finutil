export class LinkUtils {
  static getInstagramLink = (username) => {
    return `https://www.instagram.com/${username}`
  }

  static getMailToLink = (email) => {
    return `mailto:${email}`
  }
}