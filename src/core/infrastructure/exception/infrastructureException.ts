/**
 * Represent error linked to infrastructure actions.
 */
class InfrastructureException extends Error {
  /**
   * @param {string} cause
   *
   * @return {InfrastructureException}
   */
  public static causedBy(cause: string) {
    return new InfrastructureException(cause);
  }
}

export default InfrastructureException;
