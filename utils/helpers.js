module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    equals: (string1, string2, options) => {
      if (string1 == string2) {
        return options.fn(this);
      } else {
        return options.inverse(this)
      }
    },

  };
