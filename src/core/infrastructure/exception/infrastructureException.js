/**
 * Represent error linked to infrastructure actions.
 */
class InfrastructureException extends Error {
  /**
   * @param {string} cause
   *
   * @return {InfrastructureException}
   */
  static causedBy(cause) {
    return new InfrastructureException(cause);
  }
}

module.exports = InfrastructureException;
