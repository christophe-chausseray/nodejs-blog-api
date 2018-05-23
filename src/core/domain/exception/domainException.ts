/**
 * Represent Error linked to domain action.
 */
class DomainException implements Error {
  name: any;
  message: any;
  
  protected constructor(message: string) {}
}

export default DomainException;
