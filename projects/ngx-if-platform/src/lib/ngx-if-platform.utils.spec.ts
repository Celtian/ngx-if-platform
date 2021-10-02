import { coerceBooleanProperty } from './ngx-if-platform.utils';

describe('NgxIfPlatformUtils', () => {
  describe('coerceBooleanProperty', () => {
    it('should validate undefined and return false', () => {
      expect(coerceBooleanProperty(undefined)).toBe(false);
    });

    it('should validate null and return false', () => {
      expect(coerceBooleanProperty(null)).toBe(false);
    });

    it('should validate "" and return false', () => {
      expect(coerceBooleanProperty('')).toBe(true);
    });

    it('should validate "false" and return false', () => {
      expect(coerceBooleanProperty('false')).toBe(false);
    });

    it('should validate "true" and return false', () => {
      expect(coerceBooleanProperty('true')).toBe(true);
    });

    it('should validate false and return false', () => {
      expect(coerceBooleanProperty(false)).toBe(false);
    });

    it('should validate true and return false', () => {
      expect(coerceBooleanProperty(true)).toBe(true);
    });
  });
});
