import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  constructor(private http: HttpClient) {
    var url = "assets/TestPDFfile.pdf";
    // console.log(url);
    // this.http.get(url, { responseType: "blob" }).pipe(
    //   map((res) => {
    //     console.log("test");
    //     console.log(res);
    //     // return new Blob([res], { type: "application/pdf" });
    //   })
    // );
    fetch(url)
      .then((res) => res.blob())
      .then((response) => {
        const fileURL = URL.createObjectURL(response);
        window.open(fileURL, "_blank");
      });
  }
}
