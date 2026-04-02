FROM mcr.microsoft.com/dotnet/aspnet:3.1-bullseye-slim

WORKDIR /app

# Copy published app bits (already built)
COPY . .

EXPOSE 8080
ENV ASPNETCORE_URLS=http://0.0.0.0:8080

ENTRYPOINT ["dotnet","DesireERP.UI.Ecom.dll"]

