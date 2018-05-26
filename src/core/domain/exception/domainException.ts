/**
 * Represent Error linked to domain action.
 */
class DomainException implements Error {
  public name: string;
  public message: string;

  protected constructor(message: string) {}
}

export default DomainException;
