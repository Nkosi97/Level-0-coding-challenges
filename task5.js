function triangleArea(s1, s2, s3) {
    let perimeter = (1 / 2) * (s1 + s2 + s3);

    let area = Math.sqrt(
    perimeter *
      (perimeter - s1) *
      (perimeter - s2 *
      (perimeter - s3)
    ));
    return area;
  }

 