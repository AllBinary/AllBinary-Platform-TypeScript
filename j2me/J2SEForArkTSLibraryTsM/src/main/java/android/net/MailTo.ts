

/*actual*/ export class MailTo
{
  getCc(): string {
    throw new Error('Method not implemented.');
  }
  getBody(): string {
    throw new Error('Method not implemented.');
  }
  getSubject(): string {
    throw new Error('Method not implemented.');
  }
  getTo(): string {
    throw new Error('Method not implemented.');
  }
  static parse(url: string): MailTo {
    throw new Error('Method not implemented.');
  }

}

